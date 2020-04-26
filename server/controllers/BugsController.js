import express from "express";
import BaseController from "../utils/BaseController";
import { bugsService } from "../services/BugsService";
import { notesService } from "../services/NotesService"
import auth0Provider from "@bcwdev/auth0provider";

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAllBugs)
      .get("/:id", this.getBugById)
      .get("/:bugId/notes", this.getNotesByBugId)
      //NOTE Do we need a route to get bugs by flag, or can that be done on the front end?
      .post("", this.createBug)
      .put("/:id", this.editBug)
      .delete("/:id", this.closeBug)
  }
  // SECTION Get requests
  async getAllBugs(req, res, next) {
    try {
      let data = await bugsService.getAllBugs()
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async getBugById(req, res, next) {
    try {
      let data = await bugsService.getBugById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getNotesByBugId(req, res, next) {
    try {
      let data = await notesService.getNotesByBugId(req.params.bugId)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  //!SECTION
  //SECTION Post new bug
  async createBug(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let data = await bugsService.create(req.body)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  //!SECTION
  //SECTION Edit bug details

  async editBug(req, res, next) {
    try {
      let data = await bugsService.edit(req.params.id, req.userInfo.email, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  //!SECTION
  //SECTION Soft delete bug

  async closeBug(req, res, next) {
    try {
      await bugsService.closeBug(req.params.id, req.userInfo.email, req.body)
    } catch (error) {
      next(error)
    }
  }

  //!SECTION
}