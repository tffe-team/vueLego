 export default {
    name: 'r-popup',
    props: {
      value: Boolean,
      position : {
        type : String,
        deafult: 'center',
        required: false,
        validator: function (value) {
          return ['up', 'down', 'left', 'right', 'center'].indexOf(value) !== -1
        }
      },
      closeAble : {
        type : Boolean,
        deafult: false
      },
      className: {
        type : String,
        deafult: false
      }
    },
    mounted() {
     
    },
    methods: {
      close() {
        this.$emit('input', false);
      },
      slots() {
        return this.$slots.default
      }
    },
    render(h) {
      if(!this.value) {
        return
      }
      const classes = ['vue-lego-popup-content'];
      switch(this.position) {
        case 'up':
          classes.push('animate-up')
          classes.push('vue-lego-slide-in-down')
        break;
        case 'down':
          classes.push('animate-down')
          classes.push('vue-lego-slide-in-up')
        break;
        case 'left':
          classes.push('animate-left')
          classes.push('vue-lego-slide-in-left')
        break;
        case 'right':
          classes.push('animate-right')
          classes.push('vue-lego-slide-in-right')
        break;
        case 'center':
          classes.push('animate-center')
          classes.push('vue-lego-zoom-in')
        break;
      }
      if(this.className) {
        classes.push(this.className)
      }
      return (    
        <div class="r-vue-lego-popup"  vShow={this.value} >
          <div class="vue-lego-masker vue-lego-fade-in" onClick={this.close}></div>
          <div class={classes} style={this.style}>
            {this.closeAble &&
              <div class="hd">
                <span onClick={this.close} class="close-btn vue-lego-ico">&#xe90c;</span>
              </div>
            }
            <div class="bd">
              {this.slots()}
            </div>
          </div>
        </div>
      );
    }
  };
