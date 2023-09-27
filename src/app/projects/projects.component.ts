import { Component,Input } from '@angular/core';
import { Project } from '../project.model';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
 project:Project[]=[
 new Project('Fruitquality',4,"HTML, CSS, JavaScript, Spring Boot, node, PostgreSQL","To implement a robust full-stack web app with advanced technologies for an exceptional user experience",
 "To implement a robust full-stack web app with advanced technologies for an exceptional user experience",
 ),
 new Project('Eye Disease Prediction',3,'Machine Learning','To detect the cataract using advanced machine learning algorithms for a large dataset',
 'Applied a confusion matrix to demonstrate exceptional accuracy OF 80% in a binary classification model for detecting cataracts in eyes using the K-Nearest Neighbors (KNN) algorithm. Utilized advanced deep learning techniques, such as convolutional neural networks (CNNs) to extract relevant features and optimize performance.')
 ]
}
