import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class BugsService {

  //SECTION Get requests

  async getAllBugs() {
    return await dbContext.Bugs.find()
  }

  async getBugById(id) {
    let data = await dbContext.Bugs.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data
  }

  //!SECTION
  //SECTION Create, Edit, Soft Delete

  async create(rawData) {
    let data = await dbContext.Bugs.create(rawData)
    return data
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.Bugs.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid BugId or you did not create this bug ticket")
    }
    return data;
  }

  async closeBug(id, userEmail, update) {
    let data = await dbContext.Bugs.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid BugId or you did not create this bug ticket")
    }
    return data
  }

}

export const bugsService = new BugsService