export class Todo{
    constructor(
        public id?: number,
        public name?: string,
        public completed?: boolean,

    ){
        this.completed = false;
    }
}