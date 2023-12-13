import { Avatar, Card, Col, Row, Tooltip } from 'antd'
import { IconFont } from '../../../constants'
import { IItem } from '../../../data/types'

type collectPopup = {
  localCollect: { [key: string]: IItem[] } | undefined
  siteData: string
  setLocalCollect: (val: { [key: string]: IItem[] }) => void
}

export const CollectCard: React.FC<collectPopup> = ({
  localCollect,
  siteData,
  setLocalCollect
}) => {
  return (
    <Card
      bodyStyle={{ paddingBottom: 8 }}
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="titleIcon">
            <IconFont type={'icon-favorites'} />
          </div>

          <div style={{ color: '#1D2B3A' }}>收藏</div>
        </div>
      }
      className="item-content"
      id={`map-collect`}
    >
      <Row className="card" gutter={[16, 16]}>
        {localCollect?.[siteData] &&
          localCollect?.[siteData].map((val) => {
            return (
              <Col
                md={16}
                lg={8}
                xl={6}
                xxl={4}
                className="card-col"
                onClick={() => {
                  window.open(val.site_url)
                }}
                key={val.site_url}
              >
                <div className="card-item">
                  <div>
                    <Avatar
                      className="link-img"
                      shape="square"
                      size={45}
                      src={val.icon ? val.icon : undefined}
                    >
                      {val.icon ? null : val.name.charAt(0)}
                    </Avatar>
                  </div>
                  <div className="link-content">
                    <span className="card-name">{val.name}</span>
                    <Tooltip title={val.description}>
                      <p className="card-description">{val.description}</p>
                    </Tooltip>
                  </div>
                  <div className="collect">
                    <IconFont
                      type="icon-a-shoucangyishoucang"
                      onClick={(e) => {
                        e.stopPropagation()
                        const newSiteData = localCollect?.[siteData]?.filter(
                          (item) => {
                            return item.name !== val.name
                          }
                        )
                        setLocalCollect({
                          ...localCollect,
                          [siteData]: newSiteData ?? []
                        })
                      }}
                    />
                  </div>
                </div>
              </Col>
            )
          })}
      </Row>
    </Card>
  )
}
