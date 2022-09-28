import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserService } from '../service/user.service';

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Res() response, @Body() createUserDto: CreateUserDto)
    {
        try
        {
            const newUser = await this.userService.createUser(createUserDto);
            
            return response.status(HttpStatus.CREATED).json({
                message: 'User has been created successfully',
                newUser
            });
        }
        catch(err)
        {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: User not created!',
                error: 'Bad Request'
            });
        }
    }

    @Put('/:id')
    async updateUser(@Res() response, @Param('id') userId: string, @Body() updateUserDto: UpdateUserDto)
    {
        try
        {
            const existingUser = await this.userService.updateUser(userId, updateUserDto);
            return response.status(HttpStatus.OK).json({
                message: 'User has been successfully updated',
                existingUser,
            });
        }
        catch (err)
        {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getUsers(@Res() response)
    {
        try
        {
            const userData = await this.userService.getAllUsers();
            return response.status(HttpStatus.OK).json({
                message: 'All users data found successfully', userData,
            });
        }
        catch (err)
        {
            return response.status(err.status).json(err.response);
        }
    }

    @Post("/login")
    async login(@Body() request, @Res() response)
    {
        //console.log(request);
        const existingUser = await this.userService.login(request);
        
        if(existingUser == "NotFound")
        {
            return response.status(404).json({
                message: 'This user doesn\'t exist'
            });
        }
        else
        if(existingUser == "WrongPassword")
        {
            return response.status(403).json({
                message: 'Wrong password !'
            });
        }
        else
        {
            return response.status(HttpStatus.OK).json({
                message: 'You are login !', existingUser,
            });
        }

        //return existingUser;
    }

    @Post("/register")
    async register(@Res() response, @Body() createUserDto: CreateUserDto)
    {
        //console.log(createUserDto);
        const existingUser = await this.userService.register(createUserDto);
        
        if(!existingUser)
        {
            return response.status(403).json({
                message: 'This user already exists !'
            });
        }
        else
        {
            return response.status(HttpStatus.OK).json({
                message: 'Welcome !'
            });
        }

        //return existingUser;
    }

    @Get('/:id')
    async getUser(@Res() response, @Param('id') userId: string) {
        try {
            const existingUser = await
                this.userService.getUser(userId);
            return response.status(HttpStatus.OK).json({
                message: 'User found successfully', existingUser,
            });
        } catch (err) {
            return response.status(500).json({});
        }
    }

    @Delete('/:id')
    async deleteUser(@Res() response, @Param('id') userId: string)
    {
                try {
                    const deletedUser = await this.userService.deleteUser(userId);
                    return response.status(HttpStatus.OK).json({
                        message: 'User deleted successfully',
                        deletedUser,
                    });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}