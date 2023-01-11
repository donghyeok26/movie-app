import { Component } from "../core/hyeok";
import { SimpleMovie } from "../store/movie";

interface props{
    [key: string]: unknown
    movie: SimpleMovie
}

export default class MovieItem extends Component{
    public props!: props
    constructor(props: props){
        super({
            props,
            tagName: 'a'
        })
    }
    render(){
        const {movie} = this.props

        this.el.setAttribute('href',`#/movie?id=${movie.imdbID}`)
        this.el.classList.add('movie')
        this.el.style.backgroundImage = `url(${movie.Poster})`
        this.el.innerHTML = /*html*/`
            <div class="info">
                <div class="year">
                    ${movie.Year}
                </div>
                <div class="title">
                    ${movie.Title}
                </div>
            </div>
        `
    }
}