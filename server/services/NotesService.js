import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class NotesService {

  async getNotesByBugId(bugId) {
    try {
      let data = await dbContext.Notes.find({
        bugId: bugId
      })
      if (!data) {
        throw new BadRequest("Invalid BugId")
      }
      return data
    } catch (error) {
      new (error)
    }
  }

  async create(rawData) {
    let data = await dbContext.Notes.create(rawData)
    return data
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.Notes.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async delete(id, userEmail) {
    let data = await dbContext.Notes.findOneAndRemove({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
  }

}

export const notesService = new NotesService