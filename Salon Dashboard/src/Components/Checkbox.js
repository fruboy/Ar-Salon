import React from 'react'

function Checkbox() {
    return (
        <div className="flex items-center justify-between">
                        <div className="items-center">
                          <input
                            id="push_everything"
                            name="push_notifications"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            onChange={(e)=>console.log(e)}
                          />
                          <label htmlFor="push_everything" className="ml-3 text-sm font-medium text-gray-700">
                            Everything
                          </label>
                        </div>
                        <div>
                            <label htmlFor="price" className="text-sm font-medium pl-3 text-gray-700">
                              Price
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
                                      <span className="text-gray-500 sm:text-sm ">Rs</span>
                                    </div>
                                    <input
                                      type="text"
                                      name="price"
                                      id="price"
                                      className="bg-gray-200 ml-3  px-5 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                      placeholder="0.00"
                                    />
                              </div>
                        </div>
                        
                      </div>
    )
}

export default Checkbox
