import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { AuthService } from './auth.service';
import { Idea, IdeaDTO } from '@app/models/idea';
import { User } from '@app/models/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = environment.api_server + '/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private request(
    method: string,
    endpoint: string,
    body?: any): Observable<any> {
    const url = `${this.api}/${endpoint}`;
    const token = this.authService.token;

    return this.http.request(method, url, { body, headers: { authorization: `Bearer ${token}` } });
  }

  findAllUsers(page?: string) {
    const endpoint = page ? `users?page=${page}` : 'users';
    return this.request('GET', endpoint);
  }

  findOneUser(username: string) {
    return this.request('GET', `user/${username}`);
  }

  findAllIdea(page?: string) {
    const endpoint = page ? `idea?page=${page}` : 'idea';
    return this.request('GET', endpoint);
  }

  getNewestIdea(page?: string) {
    const endpoint = page ? `idea/newest?page=${page}` : 'idea/newest';
    return this.request('GET', endpoint);
  }


  getIdea(ideaId: string): Observable<Idea> {
    return this.request('GET', `idea/${ideaId}`);
  }

  createIdea(idea: IdeaDTO): Observable<Idea> {
    return this.request('POST', `idea/`, idea);
  }

  updateIdea(ideaId: string, data: Partial<IdeaDTO>): Observable<Idea> {
    return this.request('PUT', `idea/${ideaId}`, data);
  }

  deleteIdea(ideaId: string): Observable<Idea> {
    return this.request('DELETE', `idea/${ideaId}`);
  }

  upvoteIdea(ideaId: string): Observable<Idea> {
    return this.request('POST', `idea/${ideaId}/upvote`);
  }

  downvoteIdea(ideaId: string): Observable<Idea> {
    return this.request('POST', `idea/${ideaId}/downvote`);
  }

  bookmarkIdea(ideaId: string): Observable<User> {
    return this.request('POST', `idea/${ideaId}/bookmark`);
  }

  unbookmarkIdea(ideaId: string): Observable<User> {
    return this.request('DELETE', `idea/${ideaId}/bookmark`);
  }

  getCommentsByIdea(ideaId: string, page?: string): Observable<Comment[]> {
    const endpoint = page
      ? `comment/idea/${ideaId}?page=${page}`
      : `comment/idea/${ideaId}`;
    return this.request('GET', endpoint);
  }

  getCommentsByUser(userId: string, page?: string): Observable<Comment[]> {
    const endpoint = page
      ? `comment/user/${userId}?page=${page}`
      : `comment/user/${userId}`;
    return this.request('GET', endpoint);
  }

  getComment(commentId: string): Observable<Comment> {
    return this.request('GET', `comment/${commentId}`);
  }

  createComment(ideaId: string, commentDTO): Observable<Comment> {
    return this.request('POST', `comment/idea/${ideaId}`, commentDTO);
  }

  deleteComment(commentId: string): Observable<Comment> {
    return this.request('DELETE', `comment/${commentId}`);
  }

}
