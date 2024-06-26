import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-moviestors',
  templateUrl: './moviestors.page.html',
  styleUrls: ['./moviestors.page.scss'],
})
export class MoviestorsPage implements OnInit {
  movieApiURL = '';
  movieData = {
    title: '',
    description: '',
    annee: '',
    imageURL: '',
    langue:''
  };
  searchTitle = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  readApi(URL: string) {
    return this.httpClient.get(URL);
  }

  searchMovie() {
    const search = encodeURIComponent(this.searchTitle.trim());
    console.log('recherche du film ' + search);

    this.movieApiURL = 'https://www.omdbapi.com/?apikey=b4c02e52&t=' + search;
    this.readApi(this.movieApiURL).subscribe((data: any) => {
      console.log(data);
      this.movieData.title = data['Title'];
      this.movieData.description = data['Plot'];
      this.movieData.imageURL = data['Poster'];
      this.movieData.annee = data['Year'];
      this.movieData.langue = data['language'];
    });
  }
}