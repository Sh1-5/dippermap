import { ISiteConfig } from '../../types'
import { Tiles3D } from './groups/3d_tiles'
import { dataSpec } from './groups/data_spec'
import { MapEngine } from './groups/map_engine'
import { spatialDatabase } from './groups/spatial_database'
import { GeospatialAnalysis } from './groups/geospatial_analysis'
import { GISSoftWare } from './groups/gis_software'
import { RSSoftWare } from './groups/rs_software'
import { Application3D } from './groups/3d_applications'
import { WebMapServer } from './groups/web_map_server'
import { C } from './groups/geospatial_library/c'
import { CPlus } from './groups/geospatial_library/c++'
import { CSharp } from './groups/geospatial_library/c_sharp'
import { Go } from './groups/geospatial_library/go'
import { Java } from './groups/geospatial_library/java'
import { JavaScript } from './groups/geospatial_library/javascript'
import { Python } from './groups/geospatial_library/python'
import { PHP } from './groups/geospatial_library/php'
import { Julia } from './groups/geospatial_library/julia'
import { FrontEndFramework } from './groups/front_end_framework'
import { R } from './groups/geospatial_library/r'
import { OpenStandards } from './groups/open_standards'
import { Ruby } from './groups/geospatial_library/ruby'
import { Rust } from './groups/geospatial_library/rust'

export const Tech: ISiteConfig = {
  name: '开源技术',
  en_name: 'tech',
  groups: [
    GISSoftWare,
    Tiles3D,
    dataSpec,
    MapEngine,
    spatialDatabase,
    GeospatialAnalysis,
    RSSoftWare,
    Application3D,
    WebMapServer,
    FrontEndFramework,
    C,
    CPlus,
    CSharp,
    Go,
    Java,
    JavaScript,
    Python,
    PHP,
    Julia,
    R,
    OpenStandards,
    Rust,
    Ruby
  ].sort((a, b) => a.order - b.order)
}
