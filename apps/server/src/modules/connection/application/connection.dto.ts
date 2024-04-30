import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ConnectionCreateDto {
  @IsString()
  @IsOptional()
  userId1Id?: string

  @IsString()
  @IsOptional()
  userId2Id?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class ConnectionUpdateDto {
  @IsString()
  @IsOptional()
  userId1Id?: string

  @IsString()
  @IsOptional()
  userId2Id?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
