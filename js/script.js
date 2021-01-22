const seoTitle = new Tool("Title", document.querySelectorAll("title"));
const seoDescription = new Tool(
  "Desc",
  document.querySelectorAll('meta[name="description"]'),
  "content"
);

const seoKeywords = new Tool(
  "Desc",
  document.querySelectorAll('meta[name="keywords"]'),
  "content"
);

const seoCanonical = new Tool(
  "Canonical",
  document.querySelectorAll('link[rel="canonical"]'),
  "href"
);

const seoRobots = new Tool(
  "Robots",
  document.querySelectorAll('meta[name="robots"]'),
  "content"
);

const tools = {
  titleTool: createTool(
    seoTitle.displayName,
    createShowSpan("length", seoTitle.showFirstOccurenceContent().length),
    createShowSpan("count", seoTitle.countOccurences()),
    createShowSpan("content", seoTitle.showFirstOccurenceContent())
  ),
  descTool: createTool(
    seoDescription.displayName,
    createShowSpan("length", seoDescription.showFirstOccurenceContent().length),
    createShowSpan("count", seoDescription.countOccurences()),
    createShowSpan("content", seoDescription.showFirstOccurenceContent())
  ),
  kwTool: createTool(
    seoKeywords.displayName,
    createShowSpan("length", seoKeywords.showFirstOccurenceContent().length),
    createShowSpan("count", seoKeywords.countOccurences()),
    createShowSpan("content", seoKeywords.showFirstOccurenceContent())
  ),
  canonicalTool: createTool(
    seoCanonical.displayName,
    createShowSpan("count", seoCanonical.countOccurences()),
    createShowSpan("content", seoCanonical.showFirstOccurenceContent())
  ),
  robotsTool: createTool(
    seoRobots.displayName,
    createShowSpan("count", seoRobots.countOccurences()),
    createShowSpan("content", seoRobots.showFirstOccurenceContent())
  ),
};

renderToolbar(Object.values(tools));
