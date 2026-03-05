import { NextResponse } from "next/server";

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";

const QUERY = `
  query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        userAvatar
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const res = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({ query: QUERY, variables: { username: "piyyu" } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("LeetCode API error");

    const json = await res.json();
    const user = json?.data?.matchedUser;
    if (!user) throw new Error("User not found");

    const acStats: { difficulty: string; count: number }[] =
      user.submitStatsGlobal.acSubmissionNum;

    const get = (d: string) =>
      acStats.find((s) => s.difficulty === d)?.count ?? 0;

    return NextResponse.json({
      username: user.username,
      name: user.profile.realName || user.username,
      avatar: user.profile.userAvatar,
      ranking: user.profile.ranking,
      solved: {
        all: get("All"),
        easy: get("Easy"),
        medium: get("Medium"),
        hard: get("Hard"),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch LeetCode data" },
      { status: 500 }
    );
  }
}
