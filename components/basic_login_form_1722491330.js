Vue.component('basic_login_form_1722491330', {
  template: `
    <main class="h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
      <div class="p-10 flex flex-col items-center justify-center backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 w-full max-w-md rounded-3xl shadow-2xl">
        <div class="text-white w-full">
          <div class="w-full mb-5">
            <h3 class="text-3xl font-bold mb-5 text-center text-pink-100">Log in to your account</h3>
            <div class="flex justify-center mb-5">
              <p class="mr-2 mt-1.5 text-purple-100">Don't have an account?</p>
              <button class="bg-pink-500 hover:bg-pink-400 active:bg-pink-600 text-white font-medium text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Sign up</button>
            </div>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-5 w-full">
            <div>
              <label class="font-medium text-pink-100">Email</label>
              <input type="email" required class="w-full mt-2 px-4 py-3 text-white bg-purple-400 bg-opacity-20 outline-none border border-pink-300 focus:border-pink-400 rounded-full placeholder-pink-200::placeholder" />
            </div>
            <div>
              <label class="font-medium text-pink-100">Password</label>
              <input type="password" required class="w-full mt-2 px-4 py-3 text-white bg-purple-400 bg-opacity-20 outline-none border border-pink-300 focus:border-pink-400 rounded-full placeholder-pink-200::placeholder" />
            </div>
            <button class="w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:from-pink-700 active:to-purple-800 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Sign in</button>
            <div class="text-center">
              <button class="bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white font-medium text-sm px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Forgot password?</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  `,
  data() {
    return {
      expanded: false,
      data: null
    }
  },
})