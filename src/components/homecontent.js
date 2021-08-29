import SidePanel from './sidepanel'

const colorList = [
{'bgColor' : 'bg-yellow-200', 'barColor' : 'bg-yellow-700'}, 
{'bgColor' : 'bg-gray-300', 'barColor' : 'bg-indigo-700'}, 
{'bgColor' : 'bg-green-200', 'barColor' : 'bg-green-700'}, 
{'bgColor' :  'bg-blue-200', 'barColor' : 'bg-blue-700'}, 
{'bgColor' :  'bg-purple-200', 'barColor' : 'bg-purple-700'}, 
{'bgColor' : 'bg-red-200', 'barColor' : 'bg-red-700'}
]


const Content = ({ title }) => (
  
  <div className="flex flex-wrap">
    
    {/* center section */}
    <div className="w-full lg:w-8/12 globalmainbg-color py-6 px-6 rounded-3xl">
      
      {/* header text section */}
      <div className="flex justify-between text-white items-center mb-8">
        <p className="text-2xl font-bold">{title}</p>
        <p className="">{Date().split(' ').splice(0,5).join(' ')}</p>
      </div>
      <div className="flex flex-wrap justify-between items-center pb-8">
        <div className="flex flex-wrap text-white">
          <div className="pr-10">
            <div className="text-2xl font-bold">45</div>
            <div className="">In Progress</div>
          </div>
          <div className="pr-10">
            <div className="text-2xl font-bold">24</div>
            <div className="">Upcoming</div>
          </div>
          <div>
            <div className="text-2xl font-bold">62</div>
            <div className="">Total Projects</div>
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <button className="text-white bg-transparent" title="List View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button className="text-white bg-gray-700 p-2 ml-2" title="Grid View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      

      {/* Main/Chart section */}
      {/* used map with colorList to dynamically generate and color the charts */}

      <div className="flex flex-wrap">
      {colorList.map((colorItem) => <div className="w-full md:w-4/12">
          <div className="p-2">
            <div
              className={`p-4 rounded-3xl ${colorItem.bgColor}`}
              
            >
              <div className="flex items-center justify-b">
                <span className="text-sm">{Date().split(' ').splice(0,3).join(' ')}</span>
              </div>
              <div className="text-center mb-4 mt-5">
                <p className="text-base font-bold opacity-70">Web Designing</p>
                <p className="text-sm opacity-70 mt-2">Prototyping</p>
              </div>
              <div>
                <p className="text-sm font-bold m-0">Progress</p>
                <div className="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
                  <span className={`block h-1 rounded-md ${colorItem.barColor} w-6/12`} />
                </div>
                <p className="text-right m-0 text-sm font-bold">60%</p>
              </div>
              <div className="flex justify-between pt-4 relative">
                <div className="flex items-center">
                  <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant1"
                  />
                  <img
                    className="w-5 h-5 rounded-full overflow-hidden object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant2"
                  />
                  <button className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-yellow-600">
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div> )}
        

      </div>
    </div>

{/* message box */}
<SidePanel/>
    


  </div>
);

export default Content;
