import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Bot, BarChart3, Settings, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('chatbots');

  const chatbots = [
    { id: 1, name: 'Support Bot', status: 'active', conversations: 1234 },
    { id: 2, name: 'Sales Assistant', status: 'active', conversations: 892 },
    { id: 3, name: 'FAQ Bot', status: 'inactive', conversations: 567 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">AI Support Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome back!</span>
              <Button variant="outline" size="sm">Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('chatbots')}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                      activeTab === 'chatbots' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Bot className="h-5 w-5" />
                    <span>Chatbots</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                      activeTab === 'analytics' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <BarChart3 className="h-5 w-5" />
                    <span>Analytics</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('messages')}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                      activeTab === 'messages' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Messages</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                      activeTab === 'settings' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            {activeTab === 'chatbots' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">Your Chatbots</h2>
                  <Button>Create New Chatbot</Button>
                </div>
                
                <div className="grid gap-6">
                  {chatbots.map((bot) => (
                    <Card key={bot.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{bot.name}</h3>
                            <p className="text-gray-600 mt-1">
                              Status: <span className={`font-medium ${
                                bot.status === 'active' ? 'text-green-600' : 'text-gray-500'
                              }`}>
                                {bot.status}
                              </span>
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">{bot.conversations}</p>
                            <p className="text-sm text-gray-600">conversations</p>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Analytics</Button>
                          <Button variant="outline" size="sm">{bot.status === 'active' ? 'Pause' : 'Start'}</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Analytics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Total Conversations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold text-blue-600">2,693</p>
                      <p className="text-gray-600 mt-2">This month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Response Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold text-green-600">98.5%</p>
                      <p className="text-gray-600 mt-2">Average response rate</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {activeTab === 'messages' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Messages</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">No recent messages found.</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Settings</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue="user@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                          type="text"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue="My Company"
                        />
                      </div>
                      <Button>Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}