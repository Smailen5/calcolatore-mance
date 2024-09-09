
type PageTutorialProps = {
    children: React.ReactNode;
}

const PageTutorial: React.FC<PageTutorialProps> = ({children}) => {
  return (
    <section>{children}</section>
  )
}

export default PageTutorial