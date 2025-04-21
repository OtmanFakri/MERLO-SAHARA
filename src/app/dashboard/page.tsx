const Page = () => {
    return (
        <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Total Machines</h3>
                    <p className="text-3xl font-bold">24</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Active Transports</h3>
                    <p className="text-3xl font-bold">8</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Pending Maintenance</h3>
                    <p className="text-3xl font-bold">3</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b">
                            <div>
                                <p className="font-medium">Machine Maintenance Completed</p>
                                <p className="text-sm text-gray-500">Excavator #123</p>
                            </div>
                            <span className="text-sm text-gray-500">2 hours ago</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Page