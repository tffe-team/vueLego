import { i18n } from "../locales/index";

export default {
  methods: {
    $translate() {
      return i18n.apply(this, arguments);
    }
  }
};