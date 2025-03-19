import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { User } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import { Trie } from "../utils/trie";

export const UserSearch: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [trie] = useState(() => new Trie());

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);

        // Build Trie with user names
        data.forEach((user: User) => {
          trie.insert(user.name);
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const results = trie.search(debouncedSearchTerm);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <section className="py-20 bg-white" id="users">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Users</h2>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(searchTerm
              ? users.filter((user) => searchResults.includes(user.name))
              : users
            ).map((user) => (
              <div
                key={user.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
                <p className="text-gray-600 mb-2">{user.email}</p>
                <p className="text-gray-600 mb-2">{user.phone}</p>
                <p className="text-gray-600">{user.company.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
