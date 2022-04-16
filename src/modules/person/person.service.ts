import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(@InjectRepository(Person) private repository: Repository<Person>) {}
  
  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const personExists = await this.repository.findOne({where: {email: createPersonDto.email}});

    if(!personExists){
      try {
        const person = await this.repository.save(createPersonDto);

        return person;
      }catch (e) {
        return e;
      }
    }
  }

  async findAll(): Promise<Person[]> {
    try{
      const persons = await this.repository.find();

      return persons;
    }catch (e){
      return e
    }
  }

  async findOne(id: number): Promise<Person> {
    try{
      const person = await this.repository.findOne({where: {id}});

      return person;
    }catch (e){
      return e
    }
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<string> {
    const personExists = await this.repository.findOne({where: {id}});

    if(personExists){
      try {
        const person = await this.repository.update(id, updatePersonDto);

        return "Success person updated!";
      }catch (e) {
        return e;
      }
    }else {
      return "Person does not exists!";
    }
  }

  async remove(id: number): Promise<string> {
    const person = await this.repository.findOne({where: {id}});

    if(person){
      try {
        await this.repository.delete(id);
  
        return "Success";
      }catch (e) {
        return e;
      }
    } else {
      return "Person does not exists!"
    }   
  }
}
