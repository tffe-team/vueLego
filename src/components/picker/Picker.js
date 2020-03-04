import PickerColumn from './PickerColumn';
import locale from '../../mixins/locale';
export default {
  name: 'r-picker',
  mixins: [locale],
  props: {
    title : {
      type : String,
      default: '',
      required: false
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      children: [],
      visibleItemCount: 5,
      itemHeight: 30
    };
  },
  watch: {
    columns: 'setColumns'
  },
  mounted() {
  },
  methods: {
    insertColumns() {
      return this.columns.map((item, index) => (
        <PickerColumn
          initialOptions={item.options}
          itemHeight={this.itemHeight}
          defaultValue={item.value}
          visibleItemCount={this.visibleItemCount}
          onChange={() => {
            this.onChange(index);
          }}
        />
      ))

    },
    setColumns() {
      this.columns.forEach((column, index) => {
        this.setColumnValues(index, column);
      });
    },
    emit(event) {
      this.$emit(event, this.getValues(), this.getIndexes());
    },
    onChange(columnIndex) {
      this.$emit('change', this, this.getValues(), columnIndex);
    },
    getColumn(index) {
      return this.children[index];
    },
    getColumnValue(index) {
      const column = this.getColumn(index);
      return column && column.getValue();
    },
    setColumnValue(index, value) {
      const column = this.getColumn(index);
      column && column.setValue(value);
    },
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    setColumnValues(index, data) {
      const column = this.children[index];
      if (
        column &&
        JSON.stringify(column.options) !== JSON.stringify(data.options)
      ) {
        column.options = data.options;
        column.setIndex(0);
      }
    },
    getValues() {
      return this.children.map(child => child.getValue());
    },
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    },
    getIndexes() {
      return this.children.map(child => child.currentIndex);
    },
    setIndexes(indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex);
      });
    },
    onConfirm() {
      this.children.map(child => child.stopMomentum());
      this.emit('confirm');
      this.emit('cancel');
    },
    onCancel() {
      this.emit('cancel');
    }
  },
  render() {
    const wrapClass = ["r-vue-lego-picker", this.className]
    return (
      <div class={wrapClass}>
        <div class="vue-lego-masker vue-lego-fade-out" onClick={this.onCancel}></div>
        <div class="vue-lego-popup vue-lego-popup-picker vue-lego-slide-in-up">
            <header class="hd vue-lego-header-picker">
              <span class="popup-regret" onClick={this.onCancel}>{ this.$translate('cancel') }</span>
              <span class="popup-title">{this.title}</span>
              <span class="popup-affirm"  onClick={this.onConfirm}>{ this.$translate('confirm') }</span>
            </header>
            <div class="bd">
              <div class="vue-lego-picker">
                <span class="mask"></span>
                {this.insertColumns()}
              </div>
            </div>
        </div>
      </div>
    )
  }
}
