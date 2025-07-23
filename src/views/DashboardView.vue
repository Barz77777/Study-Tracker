<template>
  <MainLayout>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <h1 class="text-2xl font-semibold text-gray-900">Study Tracker</h1>
        </div>
        
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search" 
              class="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <button class="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
            + Create task
          </button>
        </div>
      </div>
    </header>

      <!-- Main Content -->
      <main class="flex-1 p-6">
        <!-- Filter and Controls -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-4">
            <button class="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd"></path>
              </svg>
              <span>Filter</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          
          <div class="flex items-center space-x-4">
            <button class="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <span>Sort by</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
            
            <button class="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <span>Group by: Status</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Kanban Board -->
        <div class="grid grid-cols-3 gap-6">
          <!-- To Do Column -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4 border-b border-gray-200 flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <h3 class="font-medium text-gray-900">To Do</h3>
                <span class="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">2</span>
              </div>
              <div class="flex items-center space-x-2">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="p-4 space-y-4">
              <!-- Task Card 1 -->
              <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-gray-900">Layout Design</h4>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
                <p class="text-sm text-blue-600 mb-3">📄 Document link</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Update</span>
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Web</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">12 days left</span>
                  </div>
                </div>
                <div class="mt-3 flex items-center justify-between">
                  <div class="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format" 
                         alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format" 
                         alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format" 
                         alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                    <span class="w-8 h-8 bg-gray-200 text-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs">+2</span>
                  </div>
                </div>
              </div>

              <!-- Task Card 2 -->
              <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-gray-900">e-Finance Onboarding</h4>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-2">
                    <span class="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">New Feature</span>
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">iOS</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">24 days left</span>
                  </div>
                </div>
                <div class="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                </div>
              </div>

              <!-- Add Task Button -->
              <button class="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                </svg>
                <span>Add task</span>
              </button>
            </div>
          </div>

          <!-- In Progress Column -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4 border-b border-gray-200 flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <h3 class="font-medium text-gray-900">In Progress</h3>
                <span class="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">5</span>
              </div>
              <div class="flex items-center space-x-2">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="p-4 space-y-4">
              <!-- Task Card 1 -->
              <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-gray-900">Create iconset for the entire platform</h4>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-2">
                    <span class="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">UI Kit</span>
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Application</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">2 days left</span>
                  </div>
                </div>
                <div class="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <span class="w-8 h-8 bg-gray-200 text-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs">+1</span>
                </div>
              </div>

              <!-- Task Card 2 -->
              <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-gray-900">Explore new visual concepts</h4>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
                <div class="mb-3">
                  <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=160&fit=crop&auto=format" 
                       alt="Visual concepts" class="w-full h-32 object-cover rounded-lg">
                </div>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-2">
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Web</span>
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Portfolio</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">4 days left</span>
                  </div>
                </div>
                <div class="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                </div>
              </div>

              <!-- Task Card 3 -->
              <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-gray-900">Develop overall look & feel of the new platform</h4>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
                <p class="text-sm text-blue-600 mb-2">🎨 Design link</p>
                <p class="text-sm text-blue-600 mb-3">📄 Brief link</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Concept</span>
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Web</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">7 days left</span>
                  </div>
                </div>
                <div class="mt-3 flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                </div>
              </div>
            </div>
          </div>

          <!-- In Review Column -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4 border-b border-gray-200 flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <h3 class="font-medium text-gray-900">In Review</h3>
                <span class="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">3</span>
              </div>
              <div class="flex items-center space-x-2">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                  </svg>
                  </button>
              </div>
            </div>
            
            <div class="p-4 space-y-4">
              <!-- Task Card 1 -->
              <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-gray-900">Take pictures of office</h4>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
                <p class="text-sm text-gray-600 mb-3">Team</p>
                <div class="flex items-center justify-between mb-3">
                  <div></div>
                  <div class="flex items-center space-x-2">
                    <span class="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">4 days left</span>
                  </div>
                </div>
                <div class="flex -space-x-2 mb-4">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                </div>
                
                <!-- Comments Icon -->
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>

              <!-- Task Card 2 -->
              <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-gray-900">Brainstorm on platform's name</h4>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
                <button class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mb-3">+ Tag</button>
                <div class="flex items-center justify-between mb-3">
                  <div></div>
                  <div class="flex items-center space-x-2">
                    <span class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">8 days left</span>
                  </div>
                </div>
                <div class="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <span class="w-8 h-8 bg-gray-200 text-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs">+4</span>
                </div>
              </div>

              <!-- Task Card 3 -->
              <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-gray-900">Complete Wireframes</h4>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </button>
                </div>
                <p class="text-sm text-blue-600 mb-3">🎨 Design link</p>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-2">
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">UX</span>
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Prototype</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">5 days left</span>
                  </div>
                </div>
                <div class="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format" 
                       alt="User" class="w-8 h-8 rounded-full border-2 border-white">
                </div>
              </div>

              <!-- Add Task Button -->
              <button class="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                </svg>
                <span>Add task</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </MainLayout>
</template>

<script setup>
// Reactive data untuk state management
import { auth as firebaseAuth } from '@/services/firebase'
import { ref, reactive } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

// State untuk tasks
const tasks = reactive({
  todo: [
    {
      id: 1,
      title: 'Layout Design',
      description: 'Document link',
      tags: ['Update', 'Web'],
      dueDate: '12 days left',
      priority: 'medium',
      assignees: [
        { name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'Jane', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'Bob', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format' }
      ],
      additionalCount: 2
    },
    {
      id: 2,
      title: 'e-Finance Onboarding',
      tags: ['New Feature', 'iOS'],
      dueDate: '24 days left',
      priority: 'high',
      assignees: [
        { name: 'Bob', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format' }
      ]
    }
  ],
  inProgress: [
    {
      id: 3,
      title: 'Create iconset for the entire platform',
      tags: ['UI Kit', 'Application'],
      dueDate: '2 days left',
      priority: 'high',
      assignees: [
        { name: 'Jane', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'Bob', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format' }
      ],
      additionalCount: 1
    },
    {
      id: 4,
      title: 'Explore new visual concepts',
      tags: ['Web', 'Portfolio'],
      dueDate: '4 days left',
      priority: 'medium',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=160&fit=crop&auto=format',
      assignees: [
        { name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format' }
      ]
    },
    {
      id: 5,
      title: 'Develop overall look & feel of the new platform',
      description: 'Design link\nBrief link',
      tags: ['Concept', 'Web'],
      dueDate: '7 days left',
      priority: 'low',
      assignees: [
        { name: 'Jane', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'Bob', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format' }
      ]
    }
  ],
  inReview: [
    {
      id: 6,
      title: 'Take pictures of office',
      description: 'Team',
      dueDate: '4 days left',
      priority: 'low',
      assignees: [
        { name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'Jane', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format' }
      ],
      hasComments: true
    },
    {
      id: 7,
      title: "Brainstorm on platform's name",
      dueDate: '8 days left',
      priority: 'medium',
      hasTag: true,
      assignees: [
        { name: 'Bob', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'Jane', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format' }
      ],
      additionalCount: 4
    },
    {
      id: 8,
      title: 'Complete Wireframes',
      description: 'Design link',
      tags: ['UX', 'Prototype'],
      dueDate: '5 days left',
      priority: 'high',
      assignees: [
        { name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format' },
        { name: 'Jane', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format' }
      ]
    }
  ]
})

// State untuk filter dan sorting
const filters = reactive({
  sortBy: 'default',
  groupBy: 'status'
})

// Methods
const addTask = (column) => {
  console.log(`Adding task to ${column}`)
  // Logic untuk menambahkan task baru
}

const getPriorityColor = (priority) => {
  const colors = {
    high: 'bg-red-100 text-red-600',
    medium: 'bg-orange-100 text-orange-600', 
    low: 'bg-green-100 text-green-600'
  }
  return colors[priority] || 'bg-gray-100 text-gray-600'
}

const getDueDateColor = (dueDate) => {
  if (dueDate.includes('2 days') || dueDate.includes('5 days')) {
    return 'bg-red-100 text-red-600'
  } else if (dueDate.includes('4 days') || dueDate.includes('8 days') || dueDate.includes('12 days')) {
    return 'bg-orange-100 text-orange-600'
  }
  return 'bg-green-100 text-green-600'
}
</script>

<style scoped>
/* Custom styles jika diperlukan */
.sidebar-transition {
  transition: all 0.3s ease;
}

.task-card {
  transition: all 0.2s ease;
}

.task-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Scrollbar styling */
.kanban-column {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

.kanban-column::-webkit-scrollbar {
  width: 4px;
}

.kanban-column::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.kanban-column::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.kanban-column::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>