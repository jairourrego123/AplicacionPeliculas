export interface ActorDTO{
    id:number;
    nombre:string;
    fechaNacimiento:Date;
    foto?:string;
}
export interface ActorCeacionDTO {
    nombre:string,
    fechaNacimiento:Date;
    foto?: File;
}
