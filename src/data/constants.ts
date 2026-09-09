import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  Radar,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import heroImg from '../assets/Hero Section Image.png';
import fabricImg from '../assets/Data Fabric.png';
import transformImg from '../assets/Transformation Engine.png';
import integrationImg from '../assets/Enterprise Integration2.png';
import enterpriseIntegration2Img from '../assets/Enterprise Integration.png';
import databasesImg from '../assets/DATABASES.png';
import cloudImg from '../assets/CLOUD (2).png';
import erpImg from '../assets/ERP _ CRM.png';
import dataLakeImg from '../assets/DATA LAKE.png';
import apiImg from '../assets/API.png';
import warehouseImg from '../assets/WAREHOUSE.png';
import aiDataFabricImg from '../assets/AI Data Fabric.png';
import dataTransformationImg from '../assets/Data Transformation.png';
import dataFederationImg from '../assets/Data Federation.png';
import dataEnrichmentImg from '../assets/Data Enrichment.png';
import pipelineOrchestrationImg from '../assets/Pipeline Orchestration.png';
import acceleratedProcessingImg from '../assets/Accelerated Processing.png';
import dataQualityImg from '../assets/Data Quality.png';
import aiDataPreparationImg from '../assets/AI Data Preparation.png';
import dataOperationsImg from '../assets/Data Operations.png';
import datasetManagementImg from '../assets/Dataset Management.png';
import enterpriseArchitectureImg from '../assets/Enterprise Architecture.png';
import dataFabricImg from '../assets/Data Fabric.png';
import readyWhenYouAreImg from '../assets/READY WHEN YOU ARE Your data future.png';
import marcusChenImg from '../assets/Marcus Chen.png';
import priyaSharmaImg from '../assets/Priya Sharma.png';
import davidOkaforImg from '../assets/David Okafor.png';
import aiDataPreparationSectionImg from '../assets/05  AI DATA PREPARATION.png';
export const cyan = '#43e6d2';
export const blue = '#315cff';

export const IMG = {
  hero: heroImg,
  card1: 'https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&w=940',
  card2: 'https://images.pexels.com/photos/8640331/pexels-photo-8640331.jpeg?auto=compress&cs=tinysrgb&w=940',
  card3: 'https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&w=940',
  feature: 'https://images.pexels.com/photos/17194838/pexels-photo-17194838.jpeg?auto=compress&cs=tinysrgb&w=1920',
  abstract: 'https://images.pexels.com/photos/12489187/pexels-photo-12489187.jpeg?auto=compress&cs=tinysrgb&w=1920',
  center: 'https://images.pexels.com/photos/17489157/pexels-photo-17489157.jpeg?auto=compress&cs=tinysrgb&w=940',
  transform: 'https://images.pexels.com/photos/6466143/pexels-photo-6466143.jpeg?auto=compress&cs=tinysrgb&w=940',
  aiCircuit: aiDataPreparationSectionImg,
  perfServer: 'https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg?auto=compress&cs=tinysrgb&w=1920',
  portrait1: 'https://images.pexels.com/photos/7793635/pexels-photo-7793635.jpeg?auto=compress&cs=tinysrgb&w=400',
  portrait2: 'https://images.pexels.com/photos/7163384/pexels-photo-7163384.jpeg?auto=compress&cs=tinysrgb&w=400',
  portrait3: 'https://images.pexels.com/photos/5583989/pexels-photo-5583989.jpeg?auto=compress&cs=tinysrgb&w=400',
  cta: readyWhenYouAreImg,
};

export const testimonials = [
  { quote: 'DataWeaveX collapsed six months of integration work into three weeks. Our data fabric is finally something we can see and trust.', name: 'Marcus Chen', role: 'VP Data Engineering', company: 'Northbridge Financial', img: marcusChenImg },
  { quote: 'We went from 40 disconnected sources to a single governed layer. AI readiness went from aspirational to measurable.', name: 'Priya Sharma', role: 'Head of AI Platform', company: 'Meridian Health', img: priyaSharmaImg },
  { quote: 'The transformation engine alone saved my team thousands of hours. Pipelines that used to break weekly now run without intervention.', name: 'David Okafor', role: 'Director of Data Operations', company: 'Atlas Logistics', img: davidOkaforImg },
];

export const chartData = [
  { day: 'Mon', value: 42 },
  { day: 'Tue', value: 58 },
  { day: 'Wed', value: 51 },
  { day: 'Thu', value: 74 },
  { day: 'Fri', value: 68 },
  { day: 'Sat', value: 89 },
  { day: 'Sun', value: 84 },
];

export const healthData = [
  { name: 'Healthy', value: 78 },
  { name: 'Warning', value: 14 },
  { name: 'Failed', value: 8 },
];

export const sourceData = [
  { name: 'Databases', value: 38 },
  { name: 'Cloud', value: 26 },
  { name: 'APIs', value: 21 },
  { name: 'Other', value: 15 },
];

export const sourceNodes = [
  { label: 'DATABASES', img: databasesImg, x: 12, y: 22 },
  { label: 'CLOUD', img: cloudImg, x: 22, y: 73 },
  { label: 'ERP / CRM', img: erpImg, x: 78, y: 22 },
  { label: 'DATA LAKE', img: dataLakeImg, x: 88, y: 73 },
];

export type Feature = [string, string, string, string];

export const features: Feature[] = [
  ['01', 'AI Data Fabric', 'Connect distributed information into one intelligent layer.', aiDataFabricImg],
  ['02', 'Enterprise Integration', 'Meet data where it lives: cloud, on-prem, APIs and apps.', enterpriseIntegration2Img],
  ['03', 'Data Transformation', 'Turn fragmented source data into consistent, usable assets.', dataTransformationImg],
  ['04', 'Data Federation', 'Query across environments without moving everything first.', dataFederationImg],
  ['05', 'Data Enrichment', 'Add context, signals and meaning to every record.', dataEnrichmentImg],
  ['06', 'Pipeline Orchestration', 'Automate dependable workflows from source to dataset.', pipelineOrchestrationImg],
  ['07', 'Accelerated Processing', 'Process high-volume workloads with speed and control.', acceleratedProcessingImg],
  ['08', 'Data Quality', 'Make trust measurable with continuous validation.', dataQualityImg],
  ['09', 'AI Data Preparation', 'Deliver structured, governed data to every model.', aiDataPreparationImg],
  ['10', 'Data Operations', 'See what is moving, what is ready and what needs attention.', dataOperationsImg],
  ['11', 'Dataset Management', 'Create reusable, discoverable data products for teams.', datasetManagementImg],
  ['12', 'Enterprise Architecture', 'Build a resilient data foundation for the next era.', enterpriseArchitectureImg],
];

export const faqs: [string, string][] = [
  ['What is DataWeaveX?', 'DataWeaveX is an AI-powered data fabric and transformation platform that connects, prepares and operationalizes enterprise information.'],
  ['What is an AI data fabric?', 'An AI data fabric creates a connected, governed layer across distributed systems so teams can discover and prepare information for analytics and AI.'],
  ['Which data sources can DataWeaveX connect to?', 'Databases, cloud services, APIs, ERP and CRM systems, data lakes, warehouses, applications and structured files.'],
  ['Can DataWeaveX transform existing enterprise datasets?', 'Yes. Build repeatable pipelines to validate, normalize, enrich and transform existing datasets without rebuilding your stack.'],
  ['Can DataWeaveX integrate with cloud environments?', 'Yes. The platform is designed for hybrid and multi-cloud environments, with the same operational view across every environment.'],
  ['How does DataWeaveX prepare data for AI?', 'It validates schema, improves quality, enriches context and creates structured, traceable datasets ready for models and applications.'],
  ['Does DataWeaveX replace our existing data warehouse?', 'No. It connects to your existing architecture and makes more of your current investments useful and operational.'],
  ['How does pipeline monitoring work?', 'Every workflow has live status, processing metrics, quality signals and a clear history of what happened at each stage.'],
  ['Can DataWeaveX support enterprise-scale processing?', 'Yes. It is built around high-throughput pipelines, distributed systems and the governance expectations of enterprise environments.'],
  ['Can DataWeaveX be deployed privately?', 'Private deployment options are available for controlled environments and teams with specific governance requirements.'],
];

export const productCards = [
  { tag: '01 / DATA FABRIC', title: 'Data Fabric', desc: 'Connect every enterprise source into one intelligent, governed layer.', img: fabricImg, },
  { tag: '02 / TRANSFORMATION', title: 'Transformation Engine', desc: 'Turn raw, fragmented data into structured, AI-ready assets.', img: transformImg,  },
  { tag: '03 / INTEGRATION', title: 'Enterprise Integration', desc: 'Link ERP, CRM, cloud, APIs and warehouses without the complexity.', img: integrationImg,},
];

export type LogLevel = 'info' | 'success' | 'warning';

export type LogEntry = { id: number; time: Date; level: LogLevel; source: string; message: string; records: string };

export const logTemplates: { level: LogLevel; source: string; message: string; records: string }[] = [
  { level: 'success', source: 'Customer Sync', message: 'Batch validated and normalized', records: '842K' },
  { level: 'info', source: 'Finance Transform', message: 'Schema normalization in progress', records: '1.2M' },
  { level: 'success', source: 'AI Dataset 042', message: 'Dataset marked AI-ready', records: '4.8M' },
  { level: 'warning', source: 'Product Enrichment', message: 'Quality check flagged 3 records', records: '523K' },
  { level: 'info', source: 'ERP Connector', message: 'New source connection established', records: '—' },
  { level: 'success', source: 'Cloud Sync', message: 'Pipeline completed successfully', records: '2.4M' },
  { level: 'info', source: 'Data Lake', message: 'New partition created', records: '8.9M' },
  { level: 'success', source: 'CRM Bridge', message: 'Records enriched with signals', records: '640K' },
  { level: 'warning', source: 'API Gateway', message: 'Rate limit threshold approached', records: '—' },
  { level: 'info', source: 'Warehouse Sync', message: 'Incremental load triggered', records: '3.1M' },
  { level: 'success', source: 'Pipeline 38', message: 'Transformation checkpoint saved', records: '1.7M' },
  { level: 'info', source: 'Data Quality', message: 'Continuous validation cycle started', records: '—' },
];
