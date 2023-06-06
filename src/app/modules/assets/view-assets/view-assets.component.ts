import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Assets } from '../models/assets.model';
import { AssetsService } from '../assets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddAssestComponent } from '../add-assets/add-assets.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-assets',
  templateUrl: './view-assets.component.html',
  styleUrls: ['./view-assets.component.scss'],
})
export class ViewAssetsComponent implements OnInit {
  assetsList!: MatTableDataSource<Assets>;
  public assets!: Assets[];
  displayedColumns: string[] = [
    'idNo',
    'category',
    'brandModel',
    'reciever',
    'description',
    'issueDate',
  ];

  constructor(
    private assetsService: AssetsService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAssets();
  }

  getAssets() {
    this.assetsService.getAssests().subscribe({
      next: (res) => {
        this.assets = res;
        this.assetsList = new MatTableDataSource(this.assets);
      },
      error: () => {
        this.snackBar.open('Oopz Something Went Wrong');
      },
    });
  }

  onAddAsset() {
    const dialogRef = this.dialog.open(AddAssestComponent, {
      maxWidth: '600px',
      width: '85vw',
      maxHeight: '90vh',
    });

    dialogRef.afterClosed().subscribe(() => {
      //     this.getAssets();
    });
  }
}
