import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import React from "react";

const ProjectItem = ({
  title,
  repository,
  demo,
  period,
  objective,
  challenges,
  solutions,
  results,
}: {
  title: string;
  repository: string;
  demo?: string;
  period: string;
  objective: string;
  challenges: string;
  solutions: string;
  results: string;
}) => (
  <GridItem
    bg="white"
    p={6}
    borderRadius="lg"
    boxShadow="md"
    transition="all 0.3s"
    _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
  >
    <Heading as="h3" size="md" mb={3} color="#0077be">
      {title}
    </Heading>
    <Text mb={2}>
      <strong>期間:</strong> {period}
    </Text>
    <Text mb={2}>
      <strong>目的:</strong> {objective}
    </Text>
    <Text mb={2}>
      <strong>課題:</strong> {challenges}
    </Text>
    <Text mb={2}>
      <strong>解決策とプロセス:</strong> {solutions}
    </Text>
    <Text mb={2}>
      <strong>結果:</strong> {results}
    </Text>
    <strong>レポジトリー:</strong>{" "}
    <Link href={repository} color="blue.500" isExternal>
      {repository}
    </Link>
    {demo && (
      <Text mb={2}>
        <strong>デモサイト:</strong>{" "}
        <Link href={demo} color="blue.500" isExternal>
          {demo}
        </Link>
      </Text>
    )}
  </GridItem>
);

const Projects = () => (
  <Box className="section-container">
    <Heading as="h2" className="section-heading">
      Projects
    </Heading>
    <Grid templateColumns="1fr" gap={6} className="section-content">
      <ProjectItem
        title="Twitter Clone"
        repository="https://github.com/eightsuzuki/Twitter-Clone"
        demo="https://twitter-clone-next-js-eightsuzukis-projects.vercel.app/"
        period="2024/1~2024/3"
        objective="学習目的で Twitter の主要機能を実装し、Next.js、NextAuth.js、Firebaseなどのテクノロジーを使用して、自身の技術スキルを向上させることを目指す。"
        challenges="Twitterの主要機能を含むクローンを開発するために、ユーザー認証、投稿の作成と管理、コメントやいいねの機能など、複雑な機能を統合する必要性。"
        solutions="NextAuth.jsを導入し、Firebaseを使用してGoogleアカウントでの認証を実装。Firebaseをデータベースとして使用し、投稿、コメント、およびいいねのデータを保存し、リアルタイムのデータ更新を可能に。Tailwind CSSを使用してレスポンシブなデザインを実装し、様々なデバイスや画面サイズに対応。"
        results="Twitterの主要機能を含むクローンを成功裏に実装し、ユーザーは投稿の作成、削除、コメント、いいねなどのアクションを実行できるようになった。サインインページでは、Googleアカウントを使用して認証できるようになり、セキュリティと利便性が向上。"
      />
      <ProjectItem
        title="GraphQLを使用した歌詞アプリ"
        repository="https://github.com/eightsuzuki/Lyrics-app-with-GraphQL-and-React"
        period="2023/12~2024/1"
        objective="GraphQLというクエリ言語およびAPIのためのランタイム環境について学ぶ。RESTとの違いを理解し、柔軟で効率的なクエリ言語の利用を目指す。"
        challenges="RESTful APIはエンドポイントごとにデータを提供するため、使用しない過剰なデータも取得することで過剰な通信が発生。GraphQLを使用するのが初めてであった。"
        solutions="GraphQLの基本的な使用方法を学ぶため、最初にGraphiQLで実際にjson-serverでqueryとmutationを実行しながら、データがやり取りされる仕組みを確認。"
        results="GraphQLを実際に使用し、スキーマが中心的な役割を果たし、データの型や関連性を適切に設計。余分なデータの取得を避け、リソースの無駄をなくすことができることを確認。"
      />
      <ProjectItem
        title="マイクロサービスを採用したTicketing Service Webアプリ"
        repository="https://github.com/eightsuzuki/Ticketing-Service-Microservices-with-Node-JS-and-React"
        period="2023/10~2023/12"
        objective="大規模サービスを安定して提供する上で欠かせないマイクロサービスの概念を学び、非同期通信やサービスのカプセル化を体験することが目的。"
        challenges="マイクロサービスに特有の課題である、サービスの分割方法やサービス間の通信手法などに取り組んでいます。"
        solutions="AWS や GCP などの公式ドキュメントを参考にし、マイクロサービスの概念や設計方法を学習しました。これらのサービスで実際に使用されているサービス間通信の手法も参考にしました。"
        results="マイクロサービスを実際に構築し、故意に一部のサービスを停止させても他のサービスが正常に動作することを確認。データの整合性を確保しつつ、サービス間で通信するための基本的な手法や考え方を習得しました。"
      />
      <ProjectItem
        title="Webサーバーフレームワークの構築"
        repository="https://github.com/eightsuzuki/GCDWebServer-Swift"
        period="2023/8~2023/9"
        objective="Webサーバーが実際にどのように動いているか理解し、軽量なGCDWebServerを構築して動作するかを確認。"
        challenges="実際に実装していく上でSwiftを使用することが初めてであった。"
        solutions="Swiftの公式サイトのチュートリアルを読みながら学習。"
        results="GCDWebServerが正常に起動し、指定したポートでリクエストを待機していることを確認。ルーティングの動作と応答の確認。"
      />
      <ProjectItem
        title="Reactの構築"
        repository="https://github.com/eightsuzuki/mini-react"
        period="2023/5~2023/8"
        objective="Reactがどのように動いているか理解し、実際にReactを構築して動作するかを確認。Jestを使用したテストの方法も学習。"
        challenges="Jestを使用したテストが不慣れであり、JavaScriptの知識不足があった。"
        solutions="JSの専門書「You Don't Know JS」を読み知識不足を解消。Jestは公式サイトのチュートリアルを読みながら学習。"
        results="useStateやレンダリングの仕組みについて理解し、実際に実装。Jestを使用したテストの書き方についても学習。"
      />
    </Grid>
    <GridItem>
      <Link href="https://chakra-ui.com" isExternal>
        Chakra Design system <ExternalLinkIcon mx="2px" />
      </Link>
    </GridItem>
  </Box>
);

export default Projects;
