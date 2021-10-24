import { FC, useEffect, useState } from 'react'
import './layout.css'

/**
 * Primary layout for entire project
 */
export const Layout: FC = () => {
  const [showFileHeader, setShowFileHeader] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (showFileHeader) {
      root?.style.setProperty('--file-header-height', '36px')
    } else {
      root?.style.setProperty('--file-header-height', '0px')
    }
  }, [showFileHeader])

  return (
    <div className="layout layout-spacing">
      <nav className="nav nav-spacing">
        <div className="nav-container nav-container-spacing"></div>
      </nav>

      <section>
        <div className="content-area">
          {showFileHeader ? (
            <div className="file-header file-header-spacing"></div>
          ) : null}
          <div
            className="content-type-header"
            onClick={() => setShowFileHeader(!showFileHeader)}
          >
            <div className="content-type-markdown-header">
              <span>markdown</span>
            </div>
            <div className="content-type-preview-header">
              <span>preview</span>
            </div>
          </div>
          <div className="editable-area">
            <div className="markdown">
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur
              </p>
            </div>
            <div className="preview">
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Placeat nobis minus quaerat officia aperiam
                tenetur voluptatibus quia magnam provident hic molestias ab ea
                culpa sequi, dolorum praesentium error corporis exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nobis minus quaerat officia aperiam tenetur voluptatibus quia
                magnam provident hic molestias ab ea culpa sequi, dolorum
                praesentium error corporis exercitationem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Placeat nobis minus quaerat
                officia aperiam tenetur voluptatibus quia magnam provident hic
                molestias ab ea culpa sequi, dolorum praesentium error corporis
                exercitationem?
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container footer-container-spacing"></div>
      </footer>
    </div>
  )
}
