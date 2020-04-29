export default {
  name: "ContentRender",
  functional: true,
  props: {
    render: Function,
  },
  created() {
    console.log('CREATED!')
  },
  render: (h, ctx) => {
    return ctx.props.render(h)
  }
}