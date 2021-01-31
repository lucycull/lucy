import markdownStyles from './blog.module.css'
export default function PostBody({content}) {
    return (
            <div className="container">
              <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
    )
}