import {TouchMixin} from '../../mixins/touch';

const DEFAULT_DURATION = 200;
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

function getElementTranslateY(element) {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

  return Number(translateY);
}
function  preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    event.stopPropagation(event);
  }
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isOptionDisabled(option) {
  return isObj(option) && option.disabled;
}

export default {
  name: 'PickerColumn',
  mixins: [TouchMixin],
  props: {
    defaultValue: {
      type: [String, Number],
      default: 0
    },
    itemHeight: {
      type: Number,
      default: 30
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    initialOptions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      offset: 0,
      duration: 0,
      currentIndex: 0,
      defaultIndex: 0,
      options: this.initialOptions
    }
  },
  created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }
    this.setIndex(this.currentIndex);
  },

  destroyed() {
    const { children } = this.$parent;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },
  mounted() {
  },
  computed: {
    count() {
      return this.options.length
    },
    wrapHeight() {
      return this.itemHeight * (this.visibleItemCount)
    },
    baseOffset() {
      return (this.itemHeight * (this.visibleItemCount - 1)) / 2;
    }
  },
  watch: {
    defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  methods: {
    insertOptions() {
      return this.options.map((item, index) => {
        if(item.value === this.defaultValue) {
          this.defaultIndex = index
        }
        const text = item.title
        const data = {
          attrs: {

          },
          class: [
            'item'
          ],
          on: {
            click: () => {
             // console.log(index, 2222)
            }
          }
        }
        return <li {...data}>{text}</li>
      })
    },
    onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        const translateY = getElementTranslateY(this.$refs.wrapper);
        this.offset = Math.min(0, translateY - this.baseOffset);
        this.startOffset = this.offset;
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },
    onTouchMove(event) {
      this.moving = true;
      this.touchMove(event);

      if (this.direction === 'vertical') {
        preventDefault(event, true);
      }

      this.offset = range(
        this.startOffset + this.deltaY,
        -(this.count * this.itemHeight),
        this.itemHeight
      );

      const now = Date.now();
      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },
    onTouchEnd() {
      const distance = this.offset - this.momentumOffset;
      const duration = Date.now() - this.touchStartTime;
      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;
      this.moving = false;
      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      const index = this.getIndexByOffset(this.offset);
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    onTransitionEnd() {
      this.stopMomentum();
    },
    adjustIndex(index) {
      index = range(index, 0, this.count);

      for (let i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (let i = index - 1; i >= 0; i--) {
        if (!isOptionDisabled(this.options[i])) return i;
      }
    },
    setIndex(index, userAction) {
      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      const trigger = () => {
        if (index !== this.currentIndex) {
          this.currentIndex = index;
          if (userAction) {
            this.$emit('change', index);
          }
        }
      };

      // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件
      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
    },
    getOptionText(option) {
      return option.value;
    },
    setValue(value) {
      const { options } = this;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue() {
      return this.options[this.currentIndex].value;
    },
    getIndexByOffset(offset) {
      return range(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },
    momentum(distance, duration) {
      const speed = Math.abs(distance / duration);

      distance = this.offset + (speed / 0.002) * (distance < 0 ? -1 : 1);

      const index = this.getIndexByOffset(distance);

      this.duration = this.swipeDuration;
      this.setIndex(index, true);
    },

    stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    }
  },
  render() {
    const wrapperStyle = {
      transform: `translate3d(0, ${this.offset + this.baseOffset}px, 0)`,
      transitionDuration: `${this.duration}ms`,
      transitionProperty: 'none',
      lineHeight: `${this.itemHeight}px`,
      height: `${this.wrapHeight}px`
    };
    return (
      <ul class="list" 
        onTouchstart={this.onTouchStart} 
        onTouchmove={this.onTouchMove} 
        onTouchend={this.onTouchEnd} 
        onTouchcancel={this.onTouchEnd} 
        onTransitionend={this.onTransitionEnd}
        ref="wrapper"
        style={wrapperStyle}
        >
          {this.insertOptions()}
      </ul>
    )
  }
}