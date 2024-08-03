import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {}

  @Post()
  createTasks() {}

  @Get('/:id')
  getTask() {}
}
