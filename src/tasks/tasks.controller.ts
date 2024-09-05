import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  tasksService: TasksService;

  constructor() {
    this.tasksService = new TasksService();
  }

  @Get()
  listTasks() {
    return this.tasksService.findAll();
  }

  @Post()
  createTasks(@Body() body: CreateTaskDto) {
    return this.tasksService.create(body.content);
  }

  @Get('/:id')
  async getTask(@Param('id') id: string) {
    const task = await this.tasksService.findOne(parseInt(id));

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }
}
