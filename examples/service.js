/* eslint-disable no-unused-vars */
// This is an example of a service interface as a class and a simple object.
// As a class
class MyService {
  async find(params) {} // Find all data
  async get(id, params) {} // Get a single entry
  async create(data, params) {} // Create an entry
  async update(id, data, params) {} // Update an entry by replacing it
  async patch(id, data, params) {} // Update one or more entries by merging with the new data
  async remove(id, params) {} // Remove an entry
}

// As an object
const myService = {
  async find(params) {
    return [];
  },
  async get(id, params) {},
  async create(data, params) {},
  async update(id, data, params) {},
  async patch(id, data, params) {},
  async remove(id, params) {}
}

