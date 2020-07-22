export class Article {
    

        constructor(public title?: String,
            private id?:number,
            private date?: Date,
            public description?: String,
            public link?: String,
            private type?: String
            ) {
        }
        getDescription(){
            return this.description
        }
        getType(){
            return this.type
        }
    
        
    }

