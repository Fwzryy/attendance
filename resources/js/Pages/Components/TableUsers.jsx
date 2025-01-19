export default function TableUsers({ users }) {
  return (
      <table className="min-w-full">
          <thead>
              <tr className="border-b-2">
                  <th className="px-6 py-3 text-left text-lg font-medium text-black">Id</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-black">Name</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-black">Email</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-black">Role</th>
              </tr>
          </thead>
          <tbody>
              {users.map((user) => (
                  <tr key={user.id} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
}
