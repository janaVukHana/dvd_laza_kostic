const Who = () => {
  const { setActive } = useStateContext();
  const ref = useRef();
  const [isCanvasVisible, setCanvasVisible] = useState(false);

  useEffect(() => {
    const id = document.getElementById('who').id;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(id);
          setCanvasVisible(true);
        } else {
          setCanvasVisible(false);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5 // Change this threshold value as per your requirement
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Section id="who" ref={ref}>
      <Container>
        <Left>Left</Left>
        <Right>
          {isCanvasVisible && (
            <Canvas>
              <Fire scale={1.5} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
            </Canvas>
          )}
        </Right>
      </Container>
    </Section>
  );
};
