import { defineStore } from "pinia";
import { ApiDeleteProducts, ApiGetProducts } from "../api/products.api";
import { message } from "ant-design-vue";

const useProducts = defineStore("products", {
  state: () => ({
    products: [],
    page: 0,
    size: 10,
    totalElements: null,
    loader: false,
  }),

  actions: {
    getAllProducts(page = this.page, size = this.size) {
      this.loader = true;

      ApiGetProducts(page, size)
        .then(({ data }) => {
          this.products = data.products;
          this.totalElements = data.totalProducts;
        })
        .catch((getErr) => {
          message.error(getErr);
        })
        .finally(() => {
          this.loader = false;
        });
    },

    deleteProduct(id) {
      this.loader = true;

      ApiDeleteProducts(id)
        .then(() => {
          message.success("Mahsulot o'chirildi");
          this.getAllProducts();
        })
        .catch((deleteError) => {
          message.error(deleteError);
        })
        .finally(() => {
          this.loader = false;
        });
    },
  },
});

export default useProducts;
