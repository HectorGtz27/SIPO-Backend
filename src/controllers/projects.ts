import { Request, Response } from "express";
import { Project } from "../models/project";
import { ProjectCreationAttributes } from "../models/project";
import { User } from "../models/user";
import { Client } from "../models/client";
import { JobPosition } from "../models/jobPosition";

//Getting projects

export const getProjects = async(req:Request, res:Response) => {
    const { from = 0, to = 5} = req.query;

  // DB
  await Project.findAll({ offset: Number(from), limit: Number(to), include: [{model: User, as: "owner_user"}, {model: Client, as: "owner_client"}, {model: JobPosition, as: "job_positions_list"}]} )
    .then((projects) => {
      res.json({
        status: "success",
        message: "Projects found",
        data: projects,
      });
    })
    .catch((e) => {
      res.json({
        status: "error",
        message: "Projects not found",
        data: e,
      });
    });
};

//Getting a project

export const getProject = async( req: Request, res:Response) =>{
    const { id } = req.params;

  //DB
  await Project.findByPk(id, {include: [{model: User, as: "owner_user"}, {model: Client, as: "owner_client"}, {model: JobPosition, as: "job_positions_list"}]})
    .then((project) => {
      res.json({
        status: "success",
        message: "Project found",
        data: project,
      });
    })
    .catch((e) => {
      res.json({
        status: "error",
        message: "Project not found",
        data: e,
      });
    });
};

//Creating a project

export const postProject = async (req: Request, res: Response) => {
  const {
    name,
    status,
    reason_current_status,
    owner_user_id,
    owner_client_id,
    region,
    job_positions_list = [],
    posting_date,
    exp_closure_date,
    image,
  }: ProjectCreationAttributes = req.body;

  const owner_user = await User.findByPk(owner_user_id);
  const client = await Client.findByPk(owner_client_id);

  // if user or client not found return error because the relationship is required
  if (!client || !owner_user) {
    res.json({
      status: "error",
      message: "User or Client of Project not found",
      data: null,
    });
    return;
  }

  await Project.create({
    name,
    status,
    reason_current_status,
    owner_user_id,
    owner_client_id,
    region,
    job_positions_list,
    posting_date,
    exp_closure_date,
    image,
  }, {include: [{model: User, as: "owner_user"}, {model: Client, as: "owner_client"}, {model: JobPosition, as: "job_positions_list"}]})
    .then(async(project) => {
      const projectWithAssociations = await Project.findByPk(project.id, {include: [{model: User, as: "owner_user"}, {model: Client, as: "owner_client"}, {model: JobPosition, as: "job_positions_list"}]});
      res.json({
        status: "success",
        message: "Project created",
        data: projectWithAssociations,
      });
    })
    .catch((e) => {
      res.json({
        status: "suerrorccess",
        message: "Project not created",
        data: e,
      });
    });
    
};

//Updating a project
export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...resto } = req.body;

  await Project.update(resto, { where: { id } })
    .then(async () => {
      const updatedProject = await Project.findByPk(id, {include: [{model: User, as: "owner_user"}, {model: Client, as: "owner_client"}, {model: JobPosition, as: "job_positions_list"}]});
      res.json({
        status: "success",
        message: "Project updated",
        data: updatedProject,
      });
    })
    .catch((e) => {
      res.json({
        status: "error",
        message: "Project not updated",
        data: e,
      });
    });
};

//Deleting a user (soft delete)
export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Project.update({ activeDB: false }, { where: { id } })
    .then(() => {
      res.json({
        status: "success",
        message: "Project deleted",
        data: {
          id,
        },
      });
    })
    .catch((e) => {
      res.json({
        status: "success",
        message: "Project not deleted",
        data: e,
      });
    });
};