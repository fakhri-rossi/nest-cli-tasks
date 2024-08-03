import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'All tasks';
  }

  @Post()
  createTasks(@Body() body: CreateTaskDto) {
    return body;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return `All task #${id}`;
  }
}
