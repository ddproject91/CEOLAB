import { getHomeFeed } from "@/data/home";
import { FEED_TAG_LABEL } from "@/components/HomeBits";

export default async function CommunityPage() {
  const feed = await getHomeFeed();

  return (
    <main>
      <section className="block" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="kicker">Community</p>
              <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 6px", color: "var(--ink)" }}>
                커뮤니티
              </h1>
              <p>먼저 창업한 사장님들의 질문, 정보공유, 후기가 매일 올라와요. 창업 이후에도 서로 연결되는 공간이에요.</p>
            </div>
          </div>

          {feed.length === 0 ? (
            <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>아직 게시글이 없어요.</p>
          ) : (
            <div className="feed">
              {feed.map((f, i) => (
                <a className="feed-item" href="#" key={i}>
                  <span className={`feed-tag ${f.tag}`}>{FEED_TAG_LABEL[f.tag]}</span>
                  <div className="feed-body">
                    <p className="feed-title">{f.title}</p>
                    <p className="feed-sub"><span className="author">{f.author}</span> · {f.timeAgo}</p>
                  </div>
                  <div className="feed-stats">
                    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4H4l2.2-4.3A8.4 8.4 0 1 1 21 11.5Z" /></svg>{f.comments}</span>
                    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8.6c0 4.7-8 10.4-8 10.4S4 13.3 4 8.6a4.6 4.6 0 0 1 8-3.1 4.6 4.6 0 0 1 8 3.1Z" /></svg>{f.likes}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
