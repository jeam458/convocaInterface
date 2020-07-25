import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import { registerMap } from 'echarts';

@Component({
  selector: 'ngx-busqueda1',
  templateUrl: './busqueda1.component.html',
  styleUrls: ['./busqueda1.component.scss']
})
export class Busqueda1Component implements OnInit {
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  displayedColumns:string[]=['Empresa','IA','IL','AL'];
  actEconomicas:any[]=[];
  empresas:any[]=[]
  regiones:any[]=[]
  anios:any[]=[]

  //variables del mapa
  latlong: any = {};
  mapData: any[];
  max = -Infinity;
  min = Infinity;
  options: any;

  bubbleTheme: any;
  geoColors: any[];

  private alive = true;

  datos=[
    {Id:"00001", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"00002", Nombre:"Azgard Mineria", IA:150, IL:40, AL:200},
    {Id:"00003", Nombre:"Asociación Minera SA", IA:50, IL:50, AL:200},
    {Id:"00004", Nombre:"Belemont Minera", IA:30, IL:450, AL:200},
    {Id:"00005", Nombre:"Antamina", IA:250, IL:50, AL:200},
    {Id:"00006", Nombre:"Minera Yanacocha", IA:20, IL:450, AL:200},
    {Id:"00007", Nombre:"Minera Yanacocha", IA:20, IL:450, AL:200},
    {Id:"00008", Nombre:"Minera Yanacocha", IA:50, IL:450, AL:200},
    {Id:"00009", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"000010", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"000011", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"000012", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"000013", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"000014", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"000015", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"000016", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"000017", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200},
    {Id:"000018", Nombre:"Minera Yanacocha", IA:250, IL:450, AL:200}
  ]


  constructor( private theme: NbThemeService,
    private http: HttpClient) {
      combineLatest([
        this.http.get('assets/map/peru1.json'),
        this.theme.getJsTheme(),
      ])
        .pipe(takeWhile(() => this.alive))
        .subscribe(([map, config]: [any, any]) => {
  
          registerMap('world', map);
          const colors = config.variables;
          this.bubbleTheme = config.variables.bubbleMap;
          this.geoColors = [colors.primary, colors.info, colors.success, colors.warning, colors.danger];
           this.latlong= {
            'PE': { 'latitude': -10, 'longitude': -76 }
           }
          this.mapData=[
            { 'code': 'PE', 'name': 'Peru', 'value': 29399817, 'color': this.getRandomGeoColor() }
          ]
          this.mapData.forEach((itemOpt) => {
            if (itemOpt.value > this.max) {
              this.max = itemOpt.value;
            }
            if (itemOpt.value < this.min) {
              this.min = itemOpt.value;
            }
          });
  
          this.options = {
            title: {
              text: '',
              left: 'center',
              top: '16px',
              textStyle: {
                color: this.bubbleTheme.titleColor,
              },
            },
            tooltip: {
              trigger: 'item',
              formatter: params => {
                return `${params.name}: ${params.value[2]}`;
              },
            },
            visualMap: {
              show: false,
              min: 0,
              max: this.max,
              inRange: {
                symbolSize: [6, 60],
              },
            },
            geo: {
              name: 'World Population (2010)',
              type: 'map',
              map: 'world',
              roam: true,
              label: {
                emphasis: {
                  show: false,
                },
              },
              itemStyle: {
                normal: {
                  areaColor: this.bubbleTheme.areaColor,
                  borderColor: this.bubbleTheme.areaBorderColor,
                },
                emphasis: {
                  areaColor: this.bubbleTheme.areaHoverColor,
                },
              },
              zoom: 1,
            },
            series: [
              {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: this.mapData.map(itemOpt => {
                  return {
                    name: itemOpt.name,
                    value: [
                      this.latlong[itemOpt.code].longitude,
                      this.latlong[itemOpt.code].latitude,
                      itemOpt.value,
                    ],
                    itemStyle: {
                      normal: {
                        color: itemOpt.color,
                      },
                    },
                  };
                }),
              },
            ],
          };
        });

     }

  ngOnInit() {
    this.getInfracciones();
  }

  getInfracciones(){
      this.dataSource= new MatTableDataSource(this.datos);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
  }

  //colores de burbujas
  private getRandomGeoColor() {
    const index = Math.round(Math.random() * this.geoColors.length);
    return this.geoColors[index];
  }

}
