  // Função para verificar novos posts
  const checkNewPosts = () => {
    apiPosts.getPosts().then((response) => {
      const posts = response.data;
      const newPosts = posts.filter((post) => post.userId !== user && post.id > id);
      if (newPosts.length > 0) {
        setNewPostsExist(true);
      } else {
        setNewPostsExist(false);
      }
    });
  };

  // Chamar a função checkNewPosts a cada 10 segundos
  useInterval(checkNewPosts, 10000);

  // Função para exibir o alerta de novos posts
  const showNewPostsAlert = () => {
    if (newPostsExist) {
      return (
        <div>
          <p>Novos posts foram criados!</p>
        </div>
      );
    } else {
      return null;
    }
  };

  <Button>
  {showNewPostsAlert()} {/* Exibir o alerta de novos posts */}
  </Button>
