<template>
  <div class="bg-white m-4 px-4 py-2 rounded-lg lg:ml-64 shadow-lg lg:mr-10" v-on:click="openPropertyDetail()">
    <div class="flex cursor-pointer">
        <div class="">
            <img :src="property.imageUrl" :alt="property.imageAlt" class="h-24 w-24 md:h-40 md:w-40 rounded-lg mx-auto">
        </div>
        <div class="pl-4 md:ml-2">
          <div class="text-lg">
              <span class="font-medium text-gray-900">
                  <span class="hidden">₹</span>
                  {{ property.formattedPrice }}
              </span>
              <span class="text-sm text-gray-600">/ bed</span>
          </div>
          <div class="text-sm text-gray-800">
              2 shared Rooms in dwarka
          </div>
          <div class="pt-2 hidden md:inline-flex">
            <img class="h-5 w-5 bg-yellow-400 rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADnElEQVR4nO2aSWgUQRRAXyeaxIgQvChC3GLUhJjEDVxAEYQQQVQ8qLiARw96cwUR8RL04AIGPAmK4kUFDyoEFRe8iBE14howcUEJMcSIqCETD5Whq8ee6a6ermpnph8UVPevrvr/dy1dvxpiYmJiYmJiYgoUK2oFJKYCTUAF0AO0AR+iVMgUJUArMAQMS2kQOAWURaeafizgKk7DU9M1/q+eGipbcRr7AGgBbqXc3xKVgrq5j21ka4rshCS7Z1gvIxQDv7CNrEyRT5Bk382qZoYqbAN7XOTlknxAlxJFuir2QY2Uf+0inyHlu3UpEaUD5kr5py5y2UFvdCkRpQPmS/l2F3mDlH+mWRfjlCImtuQYr3Upc12SrzOnmhmasI175yIvBnqlMtPMqWaGS9jGHXeRL5Lk782pZYZJwB9sA+tdyhyS5GfMqWaGk9jG3U1T5gV5Ov6rgN/Yxq12KdMoyfuBMca004yFc2ZP9/aPSWXO6lZqlO4GJHYCzSP5IWC3S5kiYIN0XQbszVBnL2KjpO1DKSyW4dz4tKQpJ8/+KqkNqNanfnbMxrmmtyOiQG40AAmCOaEXWKCqnO5ISyNwE7G1BfiCeMtdGZ5ZAaxEfAx5MRmxSiTDZt2IZbU/iLJh0wz0Yb+hH8BCDe3MQhiebOeAhjaUsIAjOIOcfcBSjW2uxTnEImU7zrH5CefWVwejEVHkZE/zjdd2+CjOz1a31IlzBk5I+dvAPOCJilIBGMaezxKZCqoygL8ZeL/0jAVsQ0R8/UxkYVAj6fJS5UGvHnAa0QO8KJXyw8A54DxiHjDBHCn/XOVBLwfsQxhnuaTDKg1pRt5RKkWPogyJhYnsgFB7QK4gD4GC6wHjgCkj+QEUI0j54IB67CWwAzEJ+yYfHBC4+0P+OUBpAoT8cEDgFQBy3wEWUCddd6hWkOsOqET8UwTif6JvqhXkugOy6v6Q+w7IagWA/HJAQfaAgh4CJdiBmEHc/zLxJJcdUIcdXn+Fv7jFP+SyAzZL+UdBK9FxNFYOHEQ49w7i6OpnyG2sB3ZJ11eCVuTlgJnAGtx7Srow9w5EJAlgD+I0+DHwGXEw0jNyLwgVwGJguXTvIeLQNRBeDrgBTFes82vKdSmwRLEOv3QBm1DcAqvQib+ocOq/vKuACzjPBMNMCeAyMDFbA73OBquBjcDYDGU6gIu4x+MtRMi6FnGON57s5p0E8BFxGvw2i3piYmJiYmKAvxeWHNLLy3zGAAAAAElFTkSuQmCC">
            <span class="pl-2 text-sm text-gray-600">
                Deposit: 1 months rent
            </span>
          </div>
          <div class="hidden md:inline-flex lg:ml-6">
            <div class="bg-blue-400 rounded-full px-3 pt-1 mt-10 mx-1 text-sm h-8 w-8 text-white">A</div>
            <div class="bg-blue-400 rounded-full px-3 pt-1 mt-10 mx-1 text-sm h-8 w-8 text-white">B</div>
            <div class="bg-blue-400 rounded-full px-3 pt-1 mt-10 mx-1 text-sm h-8 w-8 text-white">C</div>
            <div class="text-gray-600 text-sm mt-12 ml-2">+3 | Fully Furnished </div>
          </div>
          <div class="pt-4 flex md:hidden">
              <img class="h-5 w-5 bg-yellow-400 rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADnElEQVR4nO2aSWgUQRRAXyeaxIgQvChC3GLUhJjEDVxAEYQQQVQ8qLiARw96cwUR8RL04AIGPAmK4kUFDyoEFRe8iBE14howcUEJMcSIqCETD5Whq8ee6a6ermpnph8UVPevrvr/dy1dvxpiYmJiYmJiYgoUK2oFJKYCTUAF0AO0AR+iVMgUJUArMAQMS2kQOAWURaeafizgKk7DU9M1/q+eGipbcRr7AGgBbqXc3xKVgrq5j21ka4rshCS7Z1gvIxQDv7CNrEyRT5Bk382qZoYqbAN7XOTlknxAlxJFuir2QY2Uf+0inyHlu3UpEaUD5kr5py5y2UFvdCkRpQPmS/l2F3mDlH+mWRfjlCImtuQYr3Upc12SrzOnmhmasI175yIvBnqlMtPMqWaGS9jGHXeRL5Lk782pZYZJwB9sA+tdyhyS5GfMqWaGk9jG3U1T5gV5Ov6rgN/Yxq12KdMoyfuBMca004yFc2ZP9/aPSWXO6lZqlO4GJHYCzSP5IWC3S5kiYIN0XQbszVBnL2KjpO1DKSyW4dz4tKQpJ8/+KqkNqNanfnbMxrmmtyOiQG40AAmCOaEXWKCqnO5ISyNwE7G1BfiCeMtdGZ5ZAaxEfAx5MRmxSiTDZt2IZbU/iLJh0wz0Yb+hH8BCDe3MQhiebOeAhjaUsIAjOIOcfcBSjW2uxTnEImU7zrH5CefWVwejEVHkZE/zjdd2+CjOz1a31IlzBk5I+dvAPOCJilIBGMaezxKZCqoygL8ZeL/0jAVsQ0R8/UxkYVAj6fJS5UGvHnAa0QO8KJXyw8A54DxiHjDBHCn/XOVBLwfsQxhnuaTDKg1pRt5RKkWPogyJhYnsgFB7QK4gD4GC6wHjgCkj+QEUI0j54IB67CWwAzEJ+yYfHBC4+0P+OUBpAoT8cEDgFQBy3wEWUCddd6hWkOsOqET8UwTif6JvqhXkugOy6v6Q+w7IagWA/HJAQfaAgh4CJdiBmEHc/zLxJJcdUIcdXn+Fv7jFP+SyAzZL+UdBK9FxNFYOHEQ49w7i6OpnyG2sB3ZJ11eCVuTlgJnAGtx7Srow9w5EJAlgD+I0+DHwGXEw0jNyLwgVwGJguXTvIeLQNRBeDrgBTFes82vKdSmwRLEOv3QBm1DcAqvQib+ocOq/vKuACzjPBMNMCeAyMDFbA73OBquBjcDYDGU6gIu4x+MtRMi6FnGON57s5p0E8BFxGvw2i3piYmJiYmKAvxeWHNLLy3zGAAAAAElFTkSuQmCC">
              <span class="pl-2 text-sm text-gray-600">
                  Deposit: 1 months rent
              </span>
          </div>
        </div>
        <div class="hidden md:inline-block lg:ml-40 md:w-40 cursor-pointer">
          <div class="bg-green-400 text-white px-4 py-2 mt-2 rounded-sm text-sm">
            Visit this house
          </div>
          <div class="text-sm text-red-800 mt-16">
            RLL Hyderabad
          </div>
        </div>
        </div>
    <div class="md:hidden">
      <div class="flex justify-start pt-2">
          <div class="bg-blue-400 rounded-full px-2 mx-1 text-sm text-white">A</div>
          <div class="bg-blue-400 rounded-full px-2 mx-1 text-sm text-white">B</div>
          <div class="bg-blue-400 rounded-full px-2 mx-1 text-sm text-white">C</div>
          <div class="text-gray-600 text-sm">+3 | Fully Furnished</div>
      </div>
      <div class="text-sm text-red-800 py-1 pl-1">
          Mahajan Nest Vaishali
      </div>
    </div>
    <div class="border-t md:hidden"></div>
    <div class="flex pt-1 justify-end">
      <div class="bg-green-400 text-white px-2 py-2 rounded w-auto text-sm md:hidden">
        Visit this house
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['property'],
  methods: {
    openPropertyDetail() {
      let routeData = this.$router.resolve({ name: 'Product', query: { id: this.property.id } });
      window.open(routeData.href, "_blank");
    }
  }
}
</script>
