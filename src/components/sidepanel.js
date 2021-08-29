import React from 'react'
import {messages} from '../dashboard/data/messagedata'

export default function sidepanel() {
    
      
    return (
        <>
            <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <div className="globalmainbg-color rounded-3xl px-6 pt-6">
        <div className="flex text-white text-2xl pb-6 font-bold">
          <p>Messages &amp; Reminders</p>
        </div>
        <div>
        {/* dynamic messages */}
        {messages.map((messageItem) => 
        <div className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700">
            <img
              src={messageItem.icon}
              alt="profile image"
              className="object-cover w-10 h-10 rounded-full"
            />
            <div className="pl-4 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="text-white font-medium">{messageItem.name}</div>
                <div className="flex justify-center items-center cursor-pointer h-7 w-7">
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
                    className="text-white"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
              <p className="my-2 text-sm global-text-1">
                {messageItem.message}
              </p>
              <a className='text-sm underline text-blue-400 hover:text-blue-800 visited:text-purple-600' href={messageItem.link} target='_blank' rel="noreferrer" >{messageItem.linkName}</a> 
              <p className="text-right global-text-1 text-sm">{Date().split(' ').splice(0,2).join(' ')}</p>
            </div>
          </div>)}
        </div>
      </div>
    </div>
        </>
    )
}
