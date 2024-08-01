Vue.component('faq_accordion_1722491323', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Blockchain Data Analytics FAQs</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Get answers to common questions about our blockchain data analysis platform</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What is blockchain data analytics?",
          a: "Blockchain data analytics involves analyzing the vast amounts of data generated on blockchains to extract insights, identify patterns, and make informed decisions. Our platform provides powerful tools to query, analyze, and visualize on-chain data."
        },
        {
          q: "What blockchains do you support?",
          a: "We currently support analysis of data from major blockchains like Bitcoin, Ethereum, and their associated Layer 2 solutions. We are actively working on adding support for more blockchains."
        },
        {
          q: "Can I analyze historical blockchain data?",
          a: "Yes, our platform provides access to full historical blockchain data going back to the genesis block. You can query and analyze data from any point in time."
        },
        {
          q: "What kind of analyses can I perform?",
          a: "Our platform supports a wide range of analyses including transaction monitoring, address clustering, token tracking, smart contract analysis, and constructing custom data views tailored to your use case."
        },
        {
          q: "Do you offer any integration or API access?",
          a: "Absolutely. We provide robust APIs and SDKs that allow you to integrate blockchain data and analytics directly into your applications, dashboards and workflows."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});