import { ApiModelProperty } from '@nestjs/swagger';

export class CreateWw3Dto {
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly age: number;

  @ApiModelProperty()
  readonly breed: string;
}
