import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calcados',
  templateUrl: './calcados.page.html',
  styleUrls: ['./calcados.page.scss'],
})
export class CalcadosPage implements OnInit {

  id:number = 2;
  urlDadosCategorias: string;
  urlDadosProdutos: string;
  nomeCategoria: string;
  imgpath: string;

  categorias: object;
  filtros: object;
  produtos: object;

  dataCategoria: string;
  dataFiltros: string;
  dataProdutos: string;

  constructor(private http: HttpClient) {

    this.urlDadosCategorias = 'http://localhost:8888/api/V1/categories/list';
    this.urlDadosProdutos = 'http://localhost:8888/api/V1/categories/';
    this.id = 3;
    this.imgpath = "http://localhost:8888/";
    
  }

  // Realizar solicitação ao carregar view (evento padrão do Ionic) e exibir os dados
  ionViewWillEnter() {
    
    // Carrega os dados das categorais
    this.prepararRequestDosDados(this.urlDadosCategorias).subscribe(
      data => {
        
        // Define os dados na variável para que eles sejam exibidos
        this.categorias = data["items"];
        this.nomeCategoria = this.categorias[this.id-1]['name'];
        this.dataCategoria = JSON.stringify(this.categorias);
      }
    );

    // Carrega os dados dos produtos
    this.prepararRequestDosDados(this.urlDadosProdutos + this.id).subscribe(
      data => {
        
        // Define os dados na variável para que eles sejam exibidos
        this.filtros = data["filters"];
        this.produtos = data["items"];

        this.dataFiltros = JSON.stringify(this.filtros);
        
        this.dataProdutos = JSON.stringify(this.produtos);

      }
    );
  }
  
  // Preparar a solicitação de dados
  private prepararRequestDosDados(urlAPI: string): Observable<object> {
    return this.http.get(urlAPI);
  }

  ngOnInit() {
  }

}
