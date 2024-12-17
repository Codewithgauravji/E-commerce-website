const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Dashboard() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>


        <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div class="flex flex-1 justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
          </div>
          <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">10</span>
                of
                <span class="font-medium">97</span>
                results
              </p>
            </div>
            <div>
              <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span class="sr-only">Previous</span>
                  <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                  </svg>
                </a>
                {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
                <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span class="sr-only">Next</span>
                  <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>



        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div class="group relative">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        Basic Tee
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </div>
              <div class="group relative">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        Basic Tee
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </div>
              <div class="group relative">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        Basic Tee
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </div>
              <div class="group relative">
                <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        Basic Tee
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </div>

              {/* <!-- More products... --> */}
            </div>
          </div>
        </div>
      </div>



      <div class="bg-white">
        {/* <!--
        Mobile menu

        Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  --> */}
        <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          {/* <!--
          Off-canvas menu backdrop, show/hide based on off-canvas menu state.

          Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
    --> */}
          <div class="fixed inset-0 bg-black/25" aria-hidden="true"></div>

          <div class="fixed inset-0 z-40 flex">
            {/* <!--
            Off-canvas menu, show/hide based on off-canvas menu state.

            Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
            Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
      --> */}
            <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pb-2 pt-5">
                <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Close menu</span>
                  <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* <!-- Links --> */}
              <div class="mt-2">
                <div class="border-b border-gray-200">
                  <div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                    {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                    <button id="tabs-1-tab-1" class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>
                    {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                    <button id="tabs-1-tab-2" class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900" aria-controls="tabs-1-panel-2" role="tab" type="button">Men</button>
                  </div>
                </div>

                {/* <!-- 'Women' tab panel, show/hide based on tab state. --> */}
                <div id="tabs-1-panel-1" class="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                  <div class="grid grid-cols-2 gap-x-4">
                    <div class="group relative text-sm">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                        <a href="#" class="mt-6 block font-medium text-gray-900">
                          <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                          New Arrivals
                        </a>
                        <p aria-hidden="true" class="mt-1">Shop now</p>
                    </div>
                    <div class="group relative text-sm">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                        <a href="#" class="mt-6 block font-medium text-gray-900">
                          <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                          Basic Tees
                        </a>
                        <p aria-hidden="true" class="mt-1">Shop now</p>
                    </div>
                  </div>
                  <div>
                    <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
                    <ul role="list" aria-labelledby="women-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Dresses</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Denim</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p id="women-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
                    <ul role="list" aria-labelledby="women-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p id="women-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
                    <ul role="list" aria-labelledby="women-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Significant Other</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- 'Men' tab panel, show/hide based on tab state. --> */}
                <div id="tabs-1-panel-2" class="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
                  <div class="grid grid-cols-2 gap-x-4">
                    <div class="group relative text-sm">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                        <a href="#" class="mt-6 block font-medium text-gray-900">
                          <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                          New Arrivals
                        </a>
                        <p aria-hidden="true" class="mt-1">Shop now</p>
                    </div>
                    <div class="group relative text-sm">
                      <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                        <a href="#" class="mt-6 block font-medium text-gray-900">
                          <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                          Artwork Tees
                        </a>
                        <p aria-hidden="true" class="mt-1">Shop now</p>
                    </div>
                  </div>
                  <div>
                    <p id="men-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
                    <ul role="list" aria-labelledby="men-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p id="men-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
                    <ul role="list" aria-labelledby="men-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p id="men-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
                    <ul role="list" aria-labelledby="men-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Stores</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
                </div>
              </div>

              <div class="border-t border-gray-200 px-4 py-6">
                <a href="#" class="-m-2 flex items-center p-2">
                  <img src="https://tailwindui.com/plus/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 shrink-0"/>
                    <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span class="sr-only">, change currency</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <header class="relative bg-white">
          <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

          <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
              <div class="flex h-16 items-center">
                {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */}
                <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open menu</span>
                  <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>

                {/* <!-- Logo --> */}
                <div class="ml-4 flex lg:ml-0">
                  <a href="#">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                  </a>
                </div>

                {/* <!-- Flyout menus --> */}
                <div class="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div class="flex h-full space-x-8">
                    <div class="flex">
                      <div class="relative flex">
                        {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                        <button type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Women</button>
                      </div>

                      {/* <!--
                      'Women' flyout menu, show/hide based on flyout menu state.

                      Entering: "transition ease-out duration-200"
                      From: "opacity-0"
                      To: "opacity-100"
                      Leaving: "transition ease-in duration-150"
                      From: "opacity-100"
                      To: "opacity-0"
                --> */}
                      <div class="absolute inset-x-0 top-full text-sm text-gray-500">
                        {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                        <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                        <div class="relative bg-white">
                          <div class="mx-auto max-w-7xl px-8">
                            <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                <div class="group relative text-base sm:text-sm">
                                  <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                                    <a href="#" class="mt-6 block font-medium text-gray-900">
                                      <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                      New Arrivals
                                    </a>
                                    <p aria-hidden="true" class="mt-1">Shop now</p>
                                </div>
                                <div class="group relative text-base sm:text-sm">
                                  <img src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                                    <a href="#" class="mt-6 block font-medium text-gray-900">
                                      <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                      Basic Tees
                                    </a>
                                    <p aria-hidden="true" class="mt-1">Shop now</p>
                                </div>
                              </div>
                              <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                <div>
                                  <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                                  <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Tops</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Dresses</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Pants</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Denim</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Sweaters</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">T-Shirts</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Jackets</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Activewear</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Browse All</a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p id="Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                                  <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Watches</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Wallets</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Bags</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Sunglasses</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Hats</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Belts</a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p id="Brands-heading" class="font-medium text-gray-900">Brands</p>
                                  <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Full Nelson</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">My Way</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Counterfeit</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Significant Other</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="relative flex">
                        {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                        <button type="button" class="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">Men</button>
                      </div>

                      {/* <!--
                      'Men' flyout menu, show/hide based on flyout menu state.

                      Entering: "transition ease-out duration-200"
                      From: "opacity-0"
                      To: "opacity-100"
                      Leaving: "transition ease-in duration-150"
                      From: "opacity-100"
                      To: "opacity-0"
                --> */}
                      <div class="absolute inset-x-0 top-full text-sm text-gray-500">
                        {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                        <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                        <div class="relative bg-white">
                          <div class="mx-auto max-w-7xl px-8">
                            <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                <div class="group relative text-base sm:text-sm">
                                  <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                                    <a href="#" class="mt-6 block font-medium text-gray-900">
                                      <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                      New Arrivals
                                    </a>
                                    <p aria-hidden="true" class="mt-1">Shop now</p>
                                </div>
                                <div class="group relative text-base sm:text-sm">
                                  <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                                    <a href="#" class="mt-6 block font-medium text-gray-900">
                                      <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                      Artwork Tees
                                    </a>
                                    <p aria-hidden="true" class="mt-1">Shop now</p>
                                </div>
                              </div>
                              <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                <div>
                                  <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                                  <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Tops</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Pants</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Sweaters</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">T-Shirts</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Jackets</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Activewear</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Browse All</a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p id="Accessories-heading" class="font-medium text-gray-900">Accessories</p>
                                  <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Watches</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Wallets</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Bags</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Sunglasses</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Hats</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Belts</a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p id="Brands-heading" class="font-medium text-gray-900">Brands</p>
                                  <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Re-Arranged</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Counterfeit</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">Full Nelson</a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">My Way</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
                    <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
                  </div>
                </div>

                <div class="ml-auto flex items-center">
                  <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                    <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                    <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
                  </div>

                  <div class="hidden lg:ml-8 lg:flex">
                    <a href="#" class="flex items-center text-gray-700 hover:text-gray-800">
                      <img src="https://tailwindui.com/plus/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 shrink-0"/>
                        <span class="ml-3 block text-sm font-medium">CAD</span>
                        <span class="sr-only">, change currency</span>
                    </a>
                  </div>

                  {/* <!-- Search --> */}
                  <div class="flex lg:ml-6">
                    <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Search</span>
                      <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </a>
                  </div>

                  {/* <!-- Cart --> */}
                  <div class="ml-4 flow-root lg:ml-6">
                    <a href="#" class="group -m-2 flex items-center p-2">
                      <svg class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                      <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                      <span class="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}