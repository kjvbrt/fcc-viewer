import { PhoenixLoader } from 'phoenix-event-display';

/*
 * Edm4hepJsonLoader for loading EDM4hep json dumps
 */
export class Edm4hepJsonLoader extends PhoenixLoader {

  constructor() {
    super();
  }

  getEventData(edm4hepEventData: string): object {
    const processedEventData = {
      Tracks: {},
      Hits: {},
      Cells: {},
      Jets: {},
      'event number': '0',
      'run number': '0'
    };

    const edm4hepData = JSON.parse(edm4hepEventData)

    processedEventData.Tracks = this.getTracks();
    processedEventData.Hits = this.getHits();
    processedEventData.Cells = this.getCells();
    processedEventData.Jets = this.getJets(edm4hepData['Event 0']);

    return processedEventData;
  }

  private getTracks() {
    return {};
  }

  private getHits() {
    return {};
  }

  private getCells() {
    return {};
  }

  private getJets(edm4hepData: any) {
    const edm4hepClusters = edm4hepData['calo_clusters'];

    let jets:any[] = []
    edm4hepClusters.forEach((cluster: any) => {
      const px = cluster.position.x;
      const py = cluster.position.y;
      const pz = cluster.position.z;

      const pt = Math.sqrt(Math.pow(px, 2) + Math.pow(py, 2));
      const eta = Math.asinh(pz / pt);
      const phi = Math.acos(px / pt);

      const clusterDict = {
        eta: eta,
        phi: phi,
        energy: 2500*cluster.energy
      }
      jets.push(clusterDict);
    });

    return { "Calo Clusters": jets};
  }
}
