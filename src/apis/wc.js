import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const KEY = "ck_95b5da1e753c462564e397317342c739f3122705";
const SECRET = "cs_c5def3dbf8fd50709aad6dec02fb8aa695aeeaf9";
const URL = "http://localhost";

const api = new WooCommerceRestApi({
  url: URL,
  consumerKey: KEY,
  consumerSecret: SECRET,
  version: "wc/v3",
});

export default api;
