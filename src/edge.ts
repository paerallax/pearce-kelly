'use strict'

export default class Edge {
  sourceVertexName: string
  targetVertexName: string
  constructor(sourceVertexName: string, targetVertexName: string) {
    this.sourceVertexName = sourceVertexName
    this.targetVertexName = targetVertexName
  }
  
  getSourceVertexName(): string {
    return this.sourceVertexName
  }
  
  getTargetVertexName(): string {
    return this.targetVertexName
  }
}
